interface NavItemsType {
    name: string;
    path: string;
    dropdown?: boolean;
}

interface FooterItemsType {
    title: string;
    items: NavItemsType[];
};