export interface WebService extends Record<string, string | string[]> {
    serviceName: string; // "Example.com, an example website"
    title: string; // "An example profile on example.com"
    icon: Array<string>; // ["fas", "envelope"]
    url: string; // "https://example.com"
}