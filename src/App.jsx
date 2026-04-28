{\rtf1\ansi\ansicpg1252\cocoartf2868
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue255;\red255\green255\blue254;\red0\green0\blue0;
\red14\green110\blue109;\red144\green1\blue18;\red15\green112\blue1;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c100000;\cssrgb\c100000\c100000\c99608;\cssrgb\c0\c0\c0;
\cssrgb\c0\c50196\c50196;\cssrgb\c63922\c8235\c8235;\cssrgb\c0\c50196\c0;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Toaster\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/toaster"\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 QueryClientProvider\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '@tanstack/react-query'\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ queryClientInstance \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '@/lib/query-client'\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 BrowserRouter\cf0 \strokec4  as \cf5 \strokec5 Router\cf0 \strokec4 , \cf5 \strokec5 Route\cf0 \strokec4 , \cf5 \strokec5 Routes\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react-router-dom'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 PageNotFound\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 './lib/PageNotFound'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 AuthProvider\cf0 \strokec4 , useAuth \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '@/lib/AuthContext'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 UserNotRegisteredError\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '@/components/UserNotRegisteredError'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 Dashboard\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 './pages/Dashboard'\cf0 \strokec4 ;\cb1 \
\pard\pardeftab720\partightenfactor0
\cf7 \cb3 \strokec7 // Add page imports here\cf0 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 AuthenticatedApp\cf0 \strokec4  = () => \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  \{ isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin \} = useAuth();\cb1 \
\
\cb3   \cf7 \cb3 \strokec7 // Show loading spinner while checking app public settings or auth\cf0 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 if\cf0 \strokec4  (isLoadingPublicSettings || isLoadingAuth) \{\cb1 \
\cb3     \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3       <div className=\cf6 \strokec6 "fixed inset-0 flex items-center justify-center"\cf0 \strokec4 >\cb1 \
\cb3         <div className=\cf6 \strokec6 "w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"\cf0 \strokec4 ></div>\cb1 \
\cb3       </div>\cb1 \
\cb3     );\cb1 \
\cb3   \}\cb1 \
\
\cb3   \cf7 \cb3 \strokec7 // Handle authentication errors\cf0 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 if\cf0 \strokec4  (authError) \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (authError.type === \cf6 \strokec6 'user_not_registered'\cf0 \strokec4 ) \{\cb1 \
\cb3       \cf2 \strokec2 return\cf0 \strokec4  <\cf5 \strokec5 UserNotRegisteredError\cf0 \strokec4  />;\cb1 \
\cb3     \} \cf2 \strokec2 else\cf0 \strokec4  \cf2 \strokec2 if\cf0 \strokec4  (authError.type === \cf6 \strokec6 'auth_required'\cf0 \strokec4 ) \{\cb1 \
\cb3       \cf7 \cb3 \strokec7 // Redirect to login automatically\cf0 \cb1 \strokec4 \
\cb3       navigateToLogin();\cb1 \
\cb3       \cf2 \strokec2 return\cf0 \strokec4  \cf2 \strokec2 null\cf0 \strokec4 ;\cb1 \
\cb3     \}\cb1 \
\cb3   \}\cb1 \
\
\cb3   \cf7 \cb3 \strokec7 // Render the main app\cf0 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <\cf5 \strokec5 Routes\cf0 \strokec4 >\cb1 \
\cb3       <\cf5 \strokec5 Route\cf0 \strokec4  path=\cf6 \strokec6 "/"\cf0 \strokec4  element=\{<\cf5 \strokec5 Dashboard\cf0 \strokec4  />\} />\cb1 \
\cb3       <\cf5 \strokec5 Route\cf0 \strokec4  path=\cf6 \strokec6 "/Dashboard"\cf0 \strokec4  element=\{<\cf5 \strokec5 Dashboard\cf0 \strokec4  />\} />\cb1 \
\cb3       \{\cf7 \cb3 \strokec7 /* Add your page Route elements here */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3       <\cf5 \strokec5 Route\cf0 \strokec4  path=\cf6 \strokec6 "*"\cf0 \strokec4  element=\{<\cf5 \strokec5 PageNotFound\cf0 \strokec4  />\} />\cb1 \
\cb3     </\cf5 \strokec5 Routes\cf0 \strokec4 >\cb1 \
\cb3   );\cb1 \
\cb3 \};\cb1 \
\
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 App\cf0 \strokec4 () \{\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <\cf5 \strokec5 AuthProvider\cf0 \strokec4 >\cb1 \
\cb3       <\cf5 \strokec5 QueryClientProvider\cf0 \strokec4  client=\{queryClientInstance\}>\cb1 \
\cb3         <\cf5 \strokec5 Router\cf0 \strokec4 >\cb1 \
\cb3           <\cf5 \strokec5 AuthenticatedApp\cf0 \strokec4  />\cb1 \
\cb3         </\cf5 \strokec5 Router\cf0 \strokec4 >\cb1 \
\cb3         <\cf5 \strokec5 Toaster\cf0 \strokec4  />\cb1 \
\cb3       </\cf5 \strokec5 QueryClientProvider\cf0 \strokec4 >\cb1 \
\cb3     </\cf5 \strokec5 AuthProvider\cf0 \strokec4 >\cb1 \
\cb3   )\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf5 \strokec5 App\cf0 \cb1 \strokec4 \
\
}