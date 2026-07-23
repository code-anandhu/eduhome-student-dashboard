function WelcomeCard() {

    const student = JSON.parse(localStorage.getItem("student"));

      const name = student
        ? `${student.firstName} ${student.lastName}`
        : "Student";


    return (

        <div className="bg-white rounded-2xl shadow-sm border p-4 sm:p-6 md:p-8">

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 leading-tight">

                Welcome Back, {name}

            </h1>

            <p className="text-slate-500 mt-3 text-sm sm:text-base md:text-lg">

                Continue your learning journey and complete today's lessons.

            </p>

        </div>

    );
}

export default WelcomeCard;