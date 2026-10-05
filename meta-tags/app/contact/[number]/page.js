export async function generateMetadata({ params }) {
    const { number } = await params;
    return {
        title: `Contact Number: ${number}`,
    };
};
export default async function Contact({ params }) {
    const {number} = await params;
    return (
        <main>
            <h1>Contact Number: {number}</h1>
        </main>
    )
}