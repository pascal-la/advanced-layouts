// @ts-nocheck
import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import { getQuoteById } from '$lib/server/database'

export const load = async ({ params }: Parameters<PageServerLoad>[0]) => {
	const quote = getQuoteById(params.quoteId)

	if (!quote) {
		throw error(404)
	}

	return { quote }
}
