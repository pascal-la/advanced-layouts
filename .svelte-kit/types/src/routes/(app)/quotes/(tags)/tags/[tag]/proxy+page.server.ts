// @ts-nocheck
import type { PageServerLoad } from './$types'
import { getQuotesByTag } from '$lib/server/database'

export const load = async ({ params }: Parameters<PageServerLoad>[0]) => {
	return { quotesByTag: getQuotesByTag(params.tag) }
}
