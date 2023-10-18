export async function load({ params }) {
  const submissionId = params.submissionId; // Assuming submissionId is the applicationId from the Application model in the schema

  const application = await prisma.application.findUnique({
    where: {
      id: submissionId,
    },
    select: {
      id: true,
      submitted: true,
      applicant: {
        select: {
          name: true,
          ieeeMembership: true,
          grade: true,
          section: true,
          phone: true,
          affiliation: true,
        },
      },
      award: {
        select: {
          name: true,
        },
      },
      response: true,
      assessment: {
        select:{
          review: true,
          reviewer: {
            select: {
              name: true,
            },
          },
        },
      },
    },  
  });

  return {
    submissionId: params.submissionId,
    submission: application,
  };
}
