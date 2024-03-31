import type { Dictionary, DictionaryResource } from '@/typings/index'
import { calcChapterCount } from '@/utils'

// 中国考试
const chinaExam: DictionaryResource[] = [
  {
    id: 'cet4',
    name: 'CET-4',
    description: '大学英语四级词库',
    category: '中国考试',
    tags: ['大学英语'],
    url: '/dicts/CET4_T.json',
    length: 2607,
    language: 'kz',
    languageCategory: 'kz',
  },
]

const kazakh: DictionaryResource[] = [
  {
    id: 'kz',
    name: '基础 100',
    description: '基础 100 单词',
    category: '基础',
    tags: ['基础'],
    url: '/dicts/kz_basic_300.json',
    length: 3002,
    language: 'kz',
    languageCategory: 'kz',
  },
]

/**
 * Built-in dictionaries in an array.
 * Why arrays? Because it keeps the order across browsers.
 */
export const dictionaryResources: DictionaryResource[] = [
  // ...chinaExam,
  ...kazakh,
]

export const dictionaries: Dictionary[] = dictionaryResources.map((resource) => ({
  ...resource,
  chapterCount: calcChapterCount(resource.length),
}))

/**
 * An object-map from dictionary IDs to dictionary themselves.
 */
export const idDictionaryMap: Record<string, Dictionary> = Object.fromEntries(dictionaries.map((dict) => [dict.id, dict]))
