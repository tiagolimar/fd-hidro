import Field from "./Field";
import Container from '../Container';

function Formulario( props: { title: string }) {
    const { title } = props;

    return (
        <form className="container mx-auto bg-stone-100 mt-5 p-4 rounded shadow">
            <h1 className="text-center text-2xl">{title}</h1>
            <Container>
                <Field type="text" name="nome" />
                <Field type="email" name="email" />
                <Field type="password" name="senha" />
            </Container>
        </form>
    )
}

export default Formulario