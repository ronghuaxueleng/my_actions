FROM dreamacro/clash as clash

FROM ronghuaxueleng/mitmproxy-nodejs:6.0.2-14.18.1
LABEL maintainer="jishuixiansheng"

ARG JD_BASE_URL=https://gitee.com/getready/my_actions.git
ARG JD_BASE_BRANCH=source0904
ENV PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin \
    LANG=zh_CN.UTF-8 \
    SHELL=/bin/bash \
    PS1="\u@\h:\w \$ " \
    NODE_PATH=/usr/local/lib/node_modules \
    JD_DIR=/jd \
    WORK_DIR=/jd \
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
    jq \
    openssh-client \
    ttyd \
    npm \
    && ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo "Asia/Shanghai" > /etc/timezone \
    && git clone -b ${JD_BASE_BRANCH} ${JD_BASE_URL} ${JD_DIR} \
    && npm config set registry https://registry.npm.taobao.org \
    && cd ${JD_DIR}/docker \
    && pip3 install -r requirements.txt \
    && pip3 install --upgrade pip \
    && ln -sf /usr/local/bin/python3 /usr/bin/python \
    && npm install -g pm2 got@11.8.3 tough-cookie set-cookie-parser global-agent crypto-js \
    && rm -rf /root/.npm \
    && ln -sf ${JD_DIR}/shell/task.sh /usr/local/bin/task \
    && ln -sf ${JD_DIR}/shell/task.sh /usr/local/bin/jtask \
    && ln -sf ${JD_DIR}/shell/task.sh /usr/local/bin/mtask \
    && ln -sf ${JD_DIR}/shell/task.sh /usr/local/bin/otask \
    && ln -sf ${JD_DIR}/shell/control.sh /usr/local/bin/taskctl \
    && ln -sf ${JD_DIR}/shell/runall.sh /usr/local/bin/runall \
    && ln -sf ${JD_DIR}/shell/update.sh /usr/local/bin/update \
    && ln -sf ${JD_DIR}/shell/update.sh /usr/local/bin/jup \
    && ln -sf ${JD_DIR}/shell/jcsv.sh /usr/local/bin/jcsv \
    && chmod 777 /usr/local/bin/* \
    && chmod 777 ${JD_DIR}/* \
    && rm -rf /tmp/* \
    && rm -rf /var/cache/apk/* \
    && rm -rf /root/.npm \
    && cp -f ${JD_DIR}/docker/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh \
    && chmod 777 /usr/local/bin/docker-entrypoint.sh \
    && cp -f ${JD_DIR}/docker/supervisord.conf /etc/ \
    && rm -rf ${JD_DIR}/docker
WORKDIR ${JD_DIR}

COPY --from=clash /root/.config/clash/Country.mmdb /root/.config/clash/
COPY --from=clash /clash /
RUN chmod 777 /clash
RUN ln -sf /clash /usr/local/bin/clash
ADD refresh.sh /root/.config/clash/
RUN chmod 777 /root/.config/clash/refresh.sh
ADD ./ll /bin/ll 
RUN chmod +x /bin/ll && ln -s /bin/ll /usr/local/bin/ll

ARG REPO=gitee
ARG REPO_URL=gitee.com
ARG JD_BASE=jd_base
ARG JD_BASE_HOST=jd_base_gitee
ARG JD_BASE_KEY=-----BEGIN OPENSSH PRIVATE KEY-----\n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\nViLmNvbQECAwQF\n-----END OPENSSH PRIVATE KEY-----

RUN mkdir -p /root/.ssh \
    && mkdir -p /etc/ssh && touch /etc/ssh/ssh_config \
    && chmod 700 /root/.ssh \
    && cd /root/.ssh \
    && echo -e $JD_BASE_KEY > /root/.ssh/$JD_BASE \
    && chmod 600 /root/.ssh/$JD_BASE \
    && echo -e "Host $JD_BASE_HOST\n\tHostname $REPO_URL\n\tIdentityFile=/root/.ssh/$JD_BASE\n\nHost" > /root/.ssh/config \
    && echo -e "\n\nHost *\n  StrictHostKeyChecking no\n" >> /etc/ssh/ssh_config \
    && chmod 644 /root/.ssh/config \
    && ssh-keyscan $REPO_URL > /root/.ssh/known_hosts \
    && git config --global pull.ff only

CMD ["/usr/local/bin/supervisord", "-c", "/etc/supervisord.conf"]