import Link from 'next/link'

import { Button } from "@/components/ui/button"

export const ApplyButton = () => {
    return <Link href="/apply"><Button variant="outline">Apply</Button></Link>
}