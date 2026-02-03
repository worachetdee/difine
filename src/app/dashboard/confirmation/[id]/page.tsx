
import ConfirmationClient from "./ConfirmationClient";

export async function generateStaticParams() {
    return [{ id: "DF-2026-0215" }];
}

export default function ConfirmationPage() {
    return <ConfirmationClient />;
}
