export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a0a] text-white p-6">
      <h1 className="text-4xl font-bold text-red-500 mb-4">
        Authentication Error
      </h1>
      <p className="text-zinc-400 mb-8 text-center max-w-md">
        Something went wrong during the sign-up or login process. This usually
        happens if the link expired or the credentials are invalid.
      </p>
      <a
        href="/login"
        className="px-6 py-3 bg-white text-black font-bold rounded-sm hover:bg-[#02A3DC] hover:text-white transition-all"
      >
        Back to Login
      </a>
    </div>
  );
}
