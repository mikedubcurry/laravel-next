import axios from "axios";
import cookie from "cookie";

export default function SurveyPage({survey}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">Survey</h1>
      <p>{survey.code}</p>
      <p>{survey.customer_name}</p>
      <p>{survey.customer_email}</p>
      <p>{survey.customer_phone}</p>
    </div>
  );
}


export const getServerSideProps = async (context) =>  {
//  const response = await axios.get(`/api/surveys/${params.id}`);
//  const survey = response.data.survey;
  const {req, res, params} = context;

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
    const response = await axios.get(`http://localhost/api/surveys/${params.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });


    return {
      props: { survey: response.data },
    };
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      survey: {
        code: 'ABCDE',
        customer_name: 'John Doe',
        customer_email: 'johndoe@gmail.com',
        customer_phone: '1234567890',
      }
    }
  };
}
