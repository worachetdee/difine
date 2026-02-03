
import InvitationClient from "./InvitationClient";

export async function generateStaticParams() {
    return [{ id: "1" }];
}

export default function InvitationPage() {
    return <InvitationClient />;
}
