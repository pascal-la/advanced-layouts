// @ts-nocheck
import type { PageServerLoad } from './$types'
import { getUniqueTags } from '$lib/server/database'

export const load = async () => {
	return { tags: getUniqueTags() }
}
;null as any as PageServerLoad;