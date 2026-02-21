
import InvitationClient from "./InvitationClient";

export async function generateStaticParams() {
    return [{ id: "1" }, { id: "123" }];
}

export default function InvitationPage() {
    return <InvitationClient />;
}
