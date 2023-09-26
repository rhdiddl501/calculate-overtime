package com.calculate.overtime.back.member;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/member")
public class MemberController {

    @PostMapping("/login")
    @ResponseBody
    public Map<String, String> LoginTest(@RequestBody String loginId, String password) {
        Map<String, String> map = new HashMap<>();
        map.put("result", "success");
        return map;
    }

}
