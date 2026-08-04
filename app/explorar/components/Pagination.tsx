"use client"

import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps{
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
}

export default function Pagination({
    totalItems,
    itemsPerPage,
    currentPage,
}: PaginationProps){
    const router = useRouter();
    const searchParams = useSearchParams();

    const totalPages = Math.ceil(totalItems/itemsPerPage);
    if(totalPages <= 1) return null;

    const goToPage = (page: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", page.toString());
        router.push(`/explorar?{params.toString()}`);
    };

    return(
        <div className="flex items-center justify-center gap-4 mt-12">
            <button
            onClick={() => goToPage(currentPage -1)}
            disabled={currentPage === 1}
            className="px-5 py-2 rounded-lg bg-[#27272a] text-white font-bold disabled:opacity-30 
            disabled:cursor-not-allowed hover:bg-red-700 transition-colors cursor-pointer">
                ANTERIOR
            </button>
            <button
            onClick={() => goToPage(currentPage +1)}
            disabled={currentPage === totalPages}
            className="px-5 py-2 rounded-lg bg-[#27272a] text-white font-bold disabled:opacity-30 
            disabled:cursor-not-allowed hover:bg-red-700 transition-colors cursor-pointer">
                PRÓXIMO
            </button>
        </div>
    )
}