import { Vue, Component } from "vue-property-decorator";

interface Breadcrumb extends Record<string, any> {
    title: string;
    link: string;
}

@Component
export default class Breadcrumbs extends Vue {

    /**
     * Gets the path of the current page being viewed.
     * @returns a string with the current path, relative to the domain name, without trailing slash.
    */
    get currentPath(): string {
        const path = this.$page.path; // Closure to make code below more readable ;-)
        return (path.endsWith('/')) ? path.slice(0, -1) : path;
    }

    /** 
     * Gets the breadcrumbs to this page.
     * @returns an Array<Breadcrumb> with the breadcrumbs collection.
    */
    get breadcrumbs(): Array<Breadcrumb> {
        /** @var currentPathArray: Current path put into an array (e.g. "/blog/article" is ['blog', 'article']) */
        const currentPathArray : Array<string> = this.currentPath.split("/");

        /** @var breadcrumbs: Breadcrumbs to be returned */
        const breadcrumbs : Array<Breadcrumb> = [];

        /** @var link: Variable that helps the forEach loop with building up the link to the breadcrumb again */
        let link : string = "";

        currentPathArray.forEach(item => {
            // Build up link from previous iteration and current iteration
            link += item;

            /** @var page: Linked page (and info) that has been found by VuePress from the given link */
            const page = this.$site.pages.find(el => el.path === link || el.path === link + "/");
            
            // Adds trailing slash, needed for next iteration
            link += "/";

            // If page exists, add it to the breadcrumbs collection
            page != null && breadcrumbs.push({ title: page.title, link: page.path });
        });

        // Remove the first breadcrumb if we're on a localised page.
        breadcrumbs[0].link.indexOf(this.$localeConfig.path || "" ) === -1 && breadcrumbs.splice(0, 1);
        
        return breadcrumbs;
    }
}