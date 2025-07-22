// server/api/data.ts
import {readFileSync} from 'fs'
import {join} from 'path'

export default defineEventHandler(() => {
    const filePath = join(process.cwd(), 'server/data/data.json')
    return JSON.parse(readFileSync(filePath, 'utf-8'))
})
