import { z } from 'zod';

import { createRouter } from '@backend/createRouter';
import { auth } from '@backend/routers/authRouter';

const base = createRouter()
	.query('hello', {
		input: z
			.object({
				text: z.string().nullish(),
			})
			.nullish(),
		resolve({ input }) {
			return {
				greeting: `hello ${input?.text ?? 'world'}`,
			};
		},
	});

export const appRouter = createRouter()
	.merge('base', base) // prefix user procedures with "user"
	.merge('auth.', auth) // prefix posts procedures with "post."
;
// export type definition of API
export type AppRouter = typeof appRouter;
