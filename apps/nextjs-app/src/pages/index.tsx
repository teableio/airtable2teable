import * as React from "react"

import { ApiMigrate } from '@teatool/core';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Loader2 } from "lucide-react";

export default function Home() {
  const [airtableBaseId] = React.useState()
  const [airtableToken] = React.useState()
  const [teableToken] = React.useState()
  const [teableSpaceId] = React.useState()
  const [teableBaseUrl] = React.useState()
  const [status, setStatus] = React.useState('typing');


  async function mirgateData() {
    setStatus('submitting');
    const apiMirgrate = new ApiMigrate({
      from: {
        baseId: airtableBaseId!,
        airtableToken: airtableToken!,
      },
      to: {
        spaceId: teableSpaceId!,
        teableToken: teableToken!,
      },
      baseUrl: teableBaseUrl,
    });
    try {
      await apiMirgrate.execute();
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <div className="w-full h-screen flex items-center justify-center font-mono">
      <Card className="w-[700px]">
        <CardHeader>
          <CardTitle>Airtable to Teable</CardTitle>
          <CardDescription>Migrate data from airtable.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="flex flex-row space-x-4">
              <div className="grid basis-1/2 items-center">
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="airtable-token">Airtable Token</Label>
                  <Input id="airtable-token" placeholder="AIRTABLE_TOKEN" value={airtableToken} disabled={status === 'submitting'}/>
                </div>
              </div>
              <div className="grid basis-1/2 items-center">
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="airtable-base-id">Airtable Base ID</Label>
                  <Input id="airtable-base-id" placeholder="AIRTABLE_BASE_ID" value={airtableBaseId} disabled={status === 'submitting'}/>
                </div>
              </div>
            </div>
            <div className="flex flex-row space-x-4">
              <div className="grid basis-1/2 items-center">
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="teable-token">Teable Token</Label>
                  <Input id="teable-token" placeholder="TEABLE_TOKEN" value={teableToken} disabled={status === 'submitting'}/>
                </div>
              </div>
              <div className="grid basis-1/2 items-center">
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="teable-space-id">Teable Space ID</Label>
                  <Input id="teable-space-id" placeholder="TEABLE_SPACE_ID" value={teableSpaceId} disabled={status === 'submitting'}/>
                </div>
              </div>
            </div>
            <div>
              <Accordion type="single" collapsible orientation="horizontal" dir="rtl">
                <AccordionItem value="other-config">
                  <AccordionTrigger className="text-zinc-500">Other Config</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-4 text-zinc-500 px-2">
                      <Label htmlFor="teable-base-url">Base URL</Label>
                      <Input id="teable-base-url" placeholder="https://teable.io" value={teableBaseUrl} disabled={status === 'submitting'}/>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-row-reverse justify-between">
          <Button onClick={mirgateData} disabled={status === 'submitting'}>
            <Loader2  className={`${status === 'submitting' ? 'animate-spin' : ''} mr-2 h-4 w-4`} />
            Start
          </Button>
          {status === 'success' && <Label htmlFor="terms">✅ Let's go check the teable space now! </Label> }
          {status === 'error' && <Label htmlFor="terms">❌ Oh! Something went wrong! </Label> }
        </CardFooter>
      </Card>
    </div>

  )
}
