// function session_set() { //세션 저장
//     let session_id = document.querySelector("#typeEmailX");
//     if (sessionStorage) {
//         sessionStorage.setItem("Session_Storage_test", session_id.value);
//     } else {
//         alert("로컬 스토리지 지원 x");
//     }
//     }
import { encrypt_text, decrypt_text } from './crypto.js';

export function session_set() { //세션 저장
    let session_id = document.querySelector("#typeEmailX"); // DOM 트리에서 ID 검색
    let session_pass = document.querySelector("#typePasswordX"); // DOM 트리에서 pass 검색
    if (sessionStorage) {
    let en_text = encrypt_text(session_pass.value);
    sessionStorage.setItem("Session_Storage_id", session_id.value);
    sessionStorage.setItem("Session_Storage_pass", en_text);
    } else {
    alert("로컬 스토리지 지원 x");
    }
    }

    export  function session_get() { //세션 읽기
        if (sessionStorage) {
        return sessionStorage.getItem("Session_Storage_test");
        } else {
        alert("세션 스토리지 지원 x");
        }
        }

//<!--셋 겟 체크-->
export function session_check() { //세션 검사
            if (sessionStorage.getItem("Session_Storage_test")) {
            alert("이미 로그인 되었습니다.");
            location.href='../login/index_login.html'; // 로그인된 페이지로 이동
            }
            }
            
            function session_del() { //세션 삭제
                if (sessionStorage) {
                sessionStorage.removeItem("Session_Storage_test");
                } else {
                alert("세션 스토리지 지원 x");
                }
                }        
        


        
        
                    