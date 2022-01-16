import * as trpc from '@trpc/server';
import { Context } from './context';

/**
 * Helper function to create a routers with context
 */
export function createRouter() {
	return trpc.router<Context>();
}