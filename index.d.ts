import { Express } from 'express';
import { Headers } from './http';

/**
 * Helper for direct testing GET requests. 
 * Dispatches HTTP request and prints output in console.
 */
export function GET(endpoint: string, query: any, headers?: Headers): void;

/**
 * Helper for direct testing POST requests. 
 * Dispatches HTTP request and prints output in console.
 */
export function POST(endpoint: string, data: any, headers?: Headers): void

/**
 * Helper for direct testing PUT requests. 
 * Dispatches HTTP request and prints output in console.
 */
export function PUT(endpoint: string, data: any, headers?: Headers): void

/**
 * Helper for direct testing PATCH requests. 
 * Dispatches HTTP request and prints output in console.
 */
export function PATCH(endpoint: string, data: any, headers?: Headers): void

/**
 * Helper for direct testing POST requests. 
 * Dispatches HTTP request and prints output in console.
 */
export function DELETE(endpoint: string, data: any, headers?: Headers): void

/**
 * Use port for testing.
 * 
 * @param endpoint - Port for endpoint to hit during tests.
 */
export function use(port: number): void;

/**
 * Use URI for testing.
 * 
 * @param endpoint - URI for endpoint to hit during tests.
 */
export function use(endpoint: string): void;

/**
 * Launch an Express server and use listener for tests.
 * 
 * @param endpoint - Express server
 * @param port - Port to launch service on. (Default: 3000)
 */
export function use(endpoint: Express, port?: number): void;