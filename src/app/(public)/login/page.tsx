import LogInModal from "@/components/auth/LogInModal";

export default function Login({ searchParams }: { searchParams: { message: string } }) {
    return (
        <>
            <LogInModal searchParams={searchParams} />
        </>
    );
}
