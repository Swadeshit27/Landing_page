interface NavItemsType {
    name: string;
    path: string;
    dropdown?: boolean;
}

interface FooterItemsType {
    title: string;
    items: NavItemsType[];
};

interface StoriesType {
    id: number;
    imgSrc: string;
    subtitle: string;
    title: string;
    path: string;
}