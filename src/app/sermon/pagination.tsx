'use client'

import { Button } from "@/components/Button"
import { useRouter } from "next/navigation"

export default function Pagination({ pageNo }: { pageNo: number }) {
    const router = useRouter()

    return (
        <Button
            type="button"
            onClick={() => router.push(`/sermon?page=${pageNo + 1}`, { scroll: false })}
        >
            더보기
        </Button>
    )
}
