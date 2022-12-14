## Access Toekn 이란?

Access Token은 사용자의 권한이 확인(ex: 로그인)되었을 경우 해당 사용자를 인증하는 용도로 발급하게 됩니다.

이전에 구현했던 **Cookie로 jwt를 발급**하고 설정한 Expire 기간이 지날 때 인증이 만료되게 하는 것 또한 Access Token이라고 부를 수 있습니다.

사용자가 Access Token을 가지고 인증을 요청하는 경우 Token을 생성할 때 사용한 **비밀키(secret Key)**를 가지고 인증하기 때문에, 복잡한 설계 없이 코드를 구현할 수 있고, 여러 분기를 거치지 않아도 된다는 장점이 있습니다.

Access Token의 경우 **Stateless(무상태)** 즉, Node.js 서버가 죽었다 살아나더라도 동일한 동작을하는 방식입니다. 즉 jwt를 이용해 사용자의 인증 여부는 확인할 수 있지만, 처음 발급한 사용자 본인인지 확인할 수는 없습니다.

Access Token은 그 자체로도 사용자를 인증하는 **모든 정보를 가지고 있습니다.** 그렇기 때문에 토큰을 가지고 있는 시간이 늘어날 수록 탈취되었을 때는 피해가 더욱 커지게 됩니다.

만약 토큰이 탈취되었다고 인지하더라도 저희들은 해당 토큰이 탈취된 토큰인지 알 수 없고, 고의적으로 만료를 시킬 수도 없을 것 입니다. 그러므로 저희들은 언제든지 사용자의 토큰이 탈취될 수 있다고 생각을 하고, 피해를 최소화 할 수 있는 방향으로 개발을 진행해야 합니다.

## Refresh Token이란?

Refresh Token은 Access Token처럼 해당하는 사용자의 모든 인증 정보를 관리하는 것이 아닌, 특정한 사용자가 Access Token을 발급받을 수 있게 하기위한 용도로만 사용됩니다.

Refresh Token은 사용자의 인증 정보를 **사용자**가 가지고 있는 것이 아닌, **서버**에서 해당 사용자의 정보를 **저장소** 또는 **별도의 DB**에 저장하여 관리합니다. 그렇기 때문에, 서버에서 특정 Token 만료가 필요할 경우 저장된 Token을 제거하여 **사용자의 인증 여부를 언제든지 제어가 가능**하다는 장점이 있습니다.

그렇다면 어째서 바로 Access Token을 발급하지 않고, Refresh Token을 거쳐서 Access Token을 발급하는 것일까요? 사용자에게 발급한 Token이 탈취당할 경우 피해를 최소화 하기 위해서 사용합니다.

저희가 실제 세계에서 사용하는 **OTP**와 같이 짧은 시간 내에서만 인증 정보를 사용할 수 있게하고, 주기적으로 재발급하여, 토큰이 유출되더라도 오랜 기간동안 피해를 입는것이 아닌, 짧은 기간동안만 사용가능하도록하여 피해를 최소화할 수 있게 됩니다.

언제든지 토큰이 탈취될 수 있다는 것을 가정하고, 탈취를 막는것이 어렵다면, 우리는 탈취된 토큰 자체를 사용할 수 있는 기간을 줄여서 피해를 막을 것 입니다.
