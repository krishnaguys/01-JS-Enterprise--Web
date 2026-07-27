export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate
    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Here you would save to database
    console.log("Contact form submission:", { name, email, message });

    return Response.json(
      { message: "Contact form submitted successfully" },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
