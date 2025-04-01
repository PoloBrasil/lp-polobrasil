'use client';

export default function Contact() {
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);

        formData.append("access_key", "09fbcb30-38ea-4291-85c6-b84835f10c99");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
        }
    }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="subject" value="Novo lead recebido"></input>
        <input type="hidden" name="from_name" value="polobrasillog.com"></input>
        <input type="text" name="name"/>
        <input type="email" name="email"/>
        <textarea name="message"></textarea>
        <button type="submit">Submit Form</button>
        <input type="checkbox" name="botcheck" className="hidden" style={{display: "none"}}/>
      </form>
    </>
  );
}