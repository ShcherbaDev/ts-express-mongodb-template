export { };

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: 'development' | 'testing' | 'production';
			APP_PORT: number;
			MONGO_URI: string;
		}
	}
}
