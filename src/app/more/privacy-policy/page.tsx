import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="h-fit my-10 mx-10">
      <h1 className="text-3xl font-semibold">개인정보 정책</h1>
      <section className="mt-10">
        <h2 className="text-lg font-semibold mt-10 mb-1">
          1. StomaWeb 개인정보 처리방침
        </h2>
        <p className="text-gray-800">
          “개인정보 처리방침”이란 이용자가 안심하고 서비스를 이용할 수 있도록
          회사가 준수해야 할 지침을 의미하며, StomaWeb은 개인정보처리자가
          준수하여야 하는 개인정보보호 규정, 가이드라인을 준수하여 개인정보
          처리방침을 제공합니다.
        </p>
        <h2 className="text-lg font-semibold mt-10 mb-1">2. 개인정보 수집</h2>
        <ul className="text-gray-800">
          <h3 className="text-base font-semibold mb-1">
            특정 서비스를 이용하는 과정에서 이용자로부터 수집하는 개인정보는
            아래와 같습니다.
          </h3>
          <li>
            • 문의하기를 이용하기 위한 이름과 이메일 주소, 문의사항을
            수집합니다.
          </li>
          <li className="mt-3">
            이외의 서비스를 이용하는 과정에서 이용자로부터 수집하는 개인정보는
            없습니다.
          </li>
          <li className="mt-3 mb-1">
            StomaWeb은 아래의 방법을 통해 개인정보를 수집합니다.
          </li>
          <li>
            • 문의하기 페이지에서 이용자가 이름과 이메일, 문의사항을 직접
            입력하고 개인정보 수집에 동의하는 경우, 해당 개인정보를 수집합니다.
          </li>
        </ul>
        <h2 className="text-lg font-semibold mt-10 mb-1">3. 개인정보 수집</h2>
        <ul>
          <h3 className="text-base font-semibold mb-1">
            이용자의 문의사항에 대한 답변을 위해 이용합니다.
          </h3>
          <li>
            • 문의사항 페이지에서 수집한 이용자의 이름, 이메일, 문의사항을 통해
            이용자의 문의사항에 대한 답변을 제공합니다.
          </li>
        </ul>
        <h2 className="text-lg font-semibold mt-10 mb-1">4. 개인정보 제공</h2>
        <ul>
          <h3 className="text-base font-semibold mb-1">
            StomaWeb은 원칙적으로 개인정보를 외부에 제공하지 않습니다.
          </h3>
          <li>• 이용자의 이름, 이메일, 문의사항을 외부에 제공하지 않습니다.</li>
        </ul>
        <h2 className="text-lg font-semibold mt-10 mb-1">5. 개인정보 파기</h2>
        <ul>
          <h3 className="text-base font-semibold mb-1">
            수집 및 이용목적이 달성된 경우 수집한 개인정보는 지체없이 파기하며,
            방법은 아래와 같습니다.
          </h3>
          <li>
            • 문의사항에 대한 답변을 위해 이용한 이용자의 이름, 이메일,
            문의사항은 1달간 보관 후 파기합니다.
          </li>
        </ul>
        <h2 className="text-lg font-semibold mt-10 mb-1">
          6. 이용자 및 법정대리인의 권리와 행사 방법
        </h2>
        <ul>
          <h3 className="text-base font-semibold mb-1">
            이용자는 자신의 개인정보 처리에 관하여 아래와 같은 권리를 가질 수
            있습니다.
          </h3>
          <li>• 개인정보(이름, 이메일, 요구사항) 삭제를 요구할 권리</li>
          <li className="mt-3">
            StomaWeb은 이용자의 요청을 받은 경우 이를 지체없이 처리하며,
            이용자가 개인정보의 오류에 대한 정정을 요청한 경우 정정을 완료하기
            전까지 해당 개인정보를 이용 또는 제공하지 않습니다.
          </li>
        </ul>
        <h2 className="text-lg font-semibold mt-10 mb-1">
          7. 개인정보의 안전성 확보 조치에 관한 사항
        </h2>
        <ul>
          <h3 className="text-base font-semibold mb-1">
            StomaWeb은 이용자의 개인정보 보호를 위해 아래의 노력을 합니다.
          </h3>
          <li>
            • 개인정보(이름, 이메일, 문의사항)에 접근할 수 있는 사람을
            최소화하고 있습니다.
          </li>
        </ul>
        <h2 className="text-lg font-semibold mt-10 mb-1">
          8. 개인위치정보의 처리
        </h2>
        <ul>
          <h3 className="text-base font-semibold mb-1">
            StomaWeb은 위치정보의 보호 및 이용 등에 관한 법률에 따라 이용자의
            개인위치정보를 안전하게 관리합니다.
          </h3>
          <li>• StomaWeb은 개인위치정보를 통해 맞춤형 언어를 제공합니다.</li>
        </ul>
        <h2 className="text-lg font-semibold mt-10 mb-1">9. 문의</h2>
        <ul>
          <li>
            • 개인정보 정책에 대한 문의는{" "}
            <Link href="/more/support">
              <span className="text-gray-400 hover:text-gray-800">
                문의하기
              </span>
            </Link>
            로 이동하여 문의할 수 있습니다.
          </li>
        </ul>
      </section>
    </main>
  );
}
