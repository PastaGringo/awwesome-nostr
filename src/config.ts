import type { Config } from './types';

export const config: Config = {
	chunkSize: 20,
	lowCommitCount: 2,
	urls: [
		'https://raw.githubusercontent.com/aljazceru/awesome-nostr/main/README.md'
	],
	requestDelay: 0
};
