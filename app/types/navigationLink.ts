
export interface NavigationLink {
    title: string;
    href?: string;
    type: "route" | "popover" | "external";
    fetchPath?: string;
}