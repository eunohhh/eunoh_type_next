import LogInSignUpModal from "@/components/auth/LogInSignUpModal";
import ModalBack from "@/components/common/ModalBack";

function InterceptingLoginPage() {
    return (
        <ModalBack>
            <LogInSignUpModal type="login" />
        </ModalBack>
    );
}

export default InterceptingLoginPage;
