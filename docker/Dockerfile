FROM dreamacro/clash as clash

FROM node:lts-alpine
LABEL maintainer="jishuixiansheng"
ARG JD_BASE_URL=https://gitee.com/getready/my_actions.git
ARG JD_BASE_BRANCH=source
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
    && apk --no-cache ca-certificates add -f bash \
                             coreutils \
                             moreutils \
                             git \
                             wget \
                             curl \
                             nano \
                             tzdata \
                             perl \
                             openssl \
                             openssh \
			     jq \
			     python3 \
    && rm -rf /var/cache/apk/* \
    && ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo "Asia/Shanghai" > /etc/timezone \
    && git clone -b ${JD_BASE_BRANCH} ${JD_BASE_URL} ${JD_DIR} \
    && yarn config set registry https://registry.npm.taobao.org \
    && cd ${JD_DIR}/docker \
    && pip3 install -r requirements.txt \
    && cd ${JD_DIR}/panel \
    && npm install \
    && npm install -g pm2 \
    && cd ${JD_DIR}/panel \
    && npm install \
    && touch ${JD_DIR}/run_all.sh \
    && ln -sf ${JD_DIR}/run_all.sh /usr/local/bin/run_all \
    && ln -sf ${JD_DIR}/jd.sh /usr/local/bin/jd \
    && ln -sf ${JD_DIR}/git_pull.sh /usr/local/bin/git_pull \
    && ln -sf ${JD_DIR}/rm_log.sh /usr/local/bin/rm_log \
    && ln -sf ${JD_DIR}/export_sharecodes.sh /usr/local/bin/export_sharecodes \
    && cp -f ${JD_DIR}/docker/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh \
    && chmod 777 /usr/local/bin/docker-entrypoint.sh \
    && chmod 777 ${JD_DIR}/* && rm -rf /tmp/* \
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

ENTRYPOINT docker-entrypoint.sh
