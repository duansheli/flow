<template>
  <PageWrapper >
<!--    <template #headerContent> <WorkbenchHeader /> </template>-->
    <div class="lg:flex">
      <div class="lg:w-3/10 w-full !mr-4 enter-y">
        <UserInfo class="!my-4 enter-y" />
      </div>
      <div class="lg:w-4/10 w-full !mr-4 enter-y">
        <BannerInfo :dataSource="bannerInfoItems" height="264" class="!my-4 enter-y" :loading="loading"></BannerInfo>
      </div>
      <div class="lg:w-3/10 w-full enter-y">
        <NoticeInfo :dataSource="noticeInfoItems" :loading="loading" class="!my-4 enter-y" />
      </div>
    </div>

    <div >
      <CommonProcess />
    </div>

    <div class="md:flex enter-y mt-4">
      <AttendanceRecord class="md:w-1/2 !md:my-0 !my-4 w-full" :loading="loading" />
      <PerformanceRecord class="md:w-1/2 !md:ml-4 !md:my-0 !my-4 w-full" :loading="loading" />
    </div>

    <div class="lg:flex !mt-4">
      <div class="lg:w-5/10 w-full !mr-4 enter-y">
        <ProcessCard :loading="loading" class="enter-y" />
      </div>
      <div class="lg:w-5/10 w-full enter-y">
        <RecruitTrainCard :loading="loading" class="enter-y" />
      </div>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';

  import { Card } from 'ant-design-vue';
  import { PageWrapper } from '/@/components/Page';
  import CommonProcess from './components/CommonProcess.vue';
  import ProjectCard from './components/ProjectCard.vue';
  import PerformanceRecord from './components/PerformanceRecord.vue';
  import AttendanceRecord from './components/AttendanceRecord.vue';
  import QuickNav from './components/QuickNav.vue';
  import DynamicInfo from './components/DynamicInfo.vue';
  import ProcessCard from './components/ProcessCard.vue';
  import RecruitTrainCard from './components/RecruitTrainCard.vue';
  import SaleRadar from './components/SaleRadar.vue';
  import { dynamicInfoItems } from '../workbench/components/data';
  import BannerInfo from '../../components/banner/BannerInfo.vue';
  import UserInfo from './components/UserInfo.vue';
  import NoticeInfo from '../../components/notice/NoticeInfo.vue';
  import {bannerList, noticeInfoItems } from './components/data';

  export default defineComponent({
    components: {
      PageWrapper,
      CommonProcess,
      ProjectCard,
      QuickNav,
      DynamicInfo,
      ProcessCard,
      RecruitTrainCard,
      BannerInfo,
      UserInfo,
      NoticeInfo,
      SaleRadar,
      Card,
      PerformanceRecord,
      AttendanceRecord,
    },
    setup() {
      const loading = ref(true);

      setTimeout(() => {
        loading.value = false;
      }, 1500);

      return {
        loading,
        items: dynamicInfoItems,
        bannerInfoItems: bannerList,
        noticeInfoItems
      };
    },
  });
</script>
