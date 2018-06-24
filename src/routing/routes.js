import Listing from "@/pages/inventory/listing.vue";

const notFound = { template: "<p>Page not found</p>" };

export default [
    {
        path: "/",
        name: "listing",
        component: Listing
    },
    {
        path: "/not-found",
        name: "not-found",
        components: notFound
    }
];
