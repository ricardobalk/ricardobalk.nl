import type { polaroidImageData } from "./About/Polaroid/types"
import type { ServiceDetails } from "./Services/Service/types"
import type { Story } from "./SuccessStories/SuccessStory/types"
import type { WebService } from "./Conclusion/types"

export interface HomepageFrontmatter {
    home: true
    heroText: string[]
    polaroidImage: polaroidImageData
    services: {
        title: string
        services: ServiceDetails[]
    }
    process: {
        title: string
        subtitle: string
        text: string[]
        image: {
            path: string
            description: string
        }
    }
    successStories: {
        stories: Story
    }
    nextMove: {
        text: string[]
        connect: WebService[]
    }
  }