import type { ParsedContent } from "@nuxt/content";


export interface Solution extends ParsedContent{
    title: string;
    description: string;
    image?: HTMLImageElement;
}