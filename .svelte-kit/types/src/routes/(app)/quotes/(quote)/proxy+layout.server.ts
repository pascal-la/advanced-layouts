// @ts-nocheck
import type { LayoutServerLoad } from './$types'
import { getQuotes } from '$lib/server/database'

export const load = async () => {
	return { quotes: getQuotes() }
}
;null as any as LayoutServerLoad;