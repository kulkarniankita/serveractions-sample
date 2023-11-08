import Image from 'next/image';

export default function Posts() {
  const uploadAction = async (formData: FormData) => {
    'use server';
  };

  return (
    <div>
      Server <Image src="/dog.avif" alt="dog" width="300" height="500" />
      <form action={uploadAction}>
        <input type="text" name="name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
