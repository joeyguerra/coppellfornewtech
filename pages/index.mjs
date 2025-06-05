
import { Page } from 'juphjacs/src/Page.mjs'

class IndexPage extends Page {
    constructor (rootFolder, filePath, template) {
        super(rootFolder, filePath, template)
        this.title = "Coppell For New Tech"
        this.layout = './pages/layouts/index.html'
        this.canonical = 'https://coppellfornewtech.org/'
        this.excerpt = `The Coppell School Board is discussing the 2025-2026 budget and considering closing New Tech High School.`
        this.shouldPublish = true
        this.published = new Date('2025-05-18 18:30:00')
        this.uri = '/'
        this.image = ''
        this.tags = ['new tech', 'coppell', 'school board', 'budget', 'closing', 'high school']
    }
}

export default async (rootFolder, filePath, template) => {
    return new IndexPage(rootFolder, filePath, template)
}
