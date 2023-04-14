import { useAuth } from "@/services/useAuth";
import Link from "next/link";
import axios from "axios";
import cookie from "cookie";

export default function Dashboard({ user }) {
  console.log(user);
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">Dashboard</h1>
      <ul className="flex flex-col gap-4">
        {user &&
          user.surveys &&
          user.surveys.length &&
          user.surveys.map((survey) => (
            <li key={survey.id} className="flex flex-col gap-2">
              <p>
                <Link href={`/dashboard/surveys/${survey.id}`}>
                  {survey.code}
                </Link>
              </p>
              <p>{survey.customer_name}</p>
              <p>{survey.customer_email}</p>
              <p>{survey.customer_phone}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { req, res } = context;

  const token = cookie.parse(req.headers.cookie || "").token;

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  try {
    const response = await axios.get("/api/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.data.user) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }

    return {
      props: { user: response.data.user },
    };
  } catch (e) {
    console.log(e);
  }

  return {
    redirect: {
      destination: "/login",
      permanent: false,
    },
  };
};
