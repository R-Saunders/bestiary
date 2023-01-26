export default function Desc({ props }) {
  return (
    <section className="beast_desc">
      <p>{props.description}</p>
      <p>{props.content}</p>
    </section>
  );
}
