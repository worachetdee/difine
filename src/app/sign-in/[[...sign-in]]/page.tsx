
import SignInClient from "./SignInClient";

export async function generateStaticParams() {
    return [{ "sign-in": [] }];
}

export default function SignInPage() {
    return <SignInClient />;
}
