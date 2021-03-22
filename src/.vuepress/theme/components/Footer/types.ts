export interface FooterLink extends Record<string, string> {
    text: string,
    location: string
}
  
export interface FooterLinks extends Record<string, any> {
    navigation: Array<FooterLink>,
    social: Record<string, string>
}