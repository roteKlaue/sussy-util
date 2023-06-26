export default async (ms: number): Promise<number> => {
    return new Promise(resolve => setTimeout(resolve, ms));
}