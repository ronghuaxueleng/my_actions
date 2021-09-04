FROM dreamacro/clash as clash

FROM mitmproxy/mitmproxy:6.0.2
LABEL maintainer="jishuixiansheng"
ARG JD_BASE_URL=https://gitee.com/getready/my_actions.git
ARG JD_BASE_BRANCH=source0904
ENV PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin \
    LANG=zh_CN.UTF-8 \
    SHELL=/bin/bash \
    PS1="\u@\h:\w \$ " \
    JD_DIR=/jd \
    ENABLE_HANGUP=true \
    ENABLE_WEB_PANEL=true
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories \
    && apk update -f \
    && apk upgrade \
    && apk --no-cache ca-certificates add -f bash coreutils \
        moreutils \
        diffutils \
        git \
        wget \
        curl \
        nano \
        vim \
        make \
        procps \
        tzdata \
        perl \
        openssh-client \
        ttyd \
        nodejs-lts \
        npm \
    && ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo "Asia/Shanghai" > /etc/timezone \
    && git clone -b ${JD_BASE_BRANCH} ${JD_BASE_URL} ${JD_DIR} \
    && yarn config set registry https://registry.npm.taobao.org \
    && cd ${JD_DIR}/docker \
    && pip3 install -r requirements.txt \
    && RUN ln -sf /usr/bin/python3 /usr/bin/python \
    && npm install -g pm2 \
    && rm -rf /root/.npm \
    && touch ${JD_DIR}/runall.sh \
    && ln -sf ${JD_DIR}/runall.sh /usr/local/bin/runall \
    && ln -sf ${JD_DIR}/task.sh /usr/local/bin/task \
    && ln -sf ${JD_DIR}/task.sh /usr/local/bin/jtask \
    && ln -sf ${JD_DIR}/task.sh /usr/local/bin/mtask \
    && ln -sf ${JD_DIR}/task.sh /usr/local/bin/otask \
    && ln -sf ${JD_DIR}/control.sh /usr/local/bin/taskctl \
    && ln -sf ${JD_DIR}/code.sh /usr/local/bin/code \
    && ln -sf ${JD_DIR}/update.sh /usr/local/bin/update \
    && chmod 777 /usr/local/bin/* \
    && chmod 777 ${JD_DIR}/* \
    && rm -rf /tmp/* \
    && rm -rf /var/cache/apk/* \
    && rm -rf /root/.npm \
    && rm -rf ${JD_DIR}/docker
WORKDIR ${JD_DIR}

COPY --from=clash /root/.config/clash/Country.mmdb /root/.config/clash/
COPY --from=clash /clash /
RUN chmod 777 /clash
RUN ln -sf /clash /usr/local/bin/clash
ADD refresh.sh /root/.config/clash/
RUN chmod 777 /root/.config/clash/refresh.sh
ADD ./ll /bin/ll 
RUN chmod +x /bin/ll

ENTRYPOINT ${JD_DIR}/utils/init.sh
