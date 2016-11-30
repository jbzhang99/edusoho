<?php

namespace Biz\Activity\Service;

use Biz\Activity\Config\Activity;

interface ActivityService
{
    public function getActivity($id);

    public function getActivityFetchExt($id);

    public function findActivities($ids);

    public function createActivity($activity);

    public function updateActivity($id, $fields);

    public function deleteActivity($id);

    /**
     * @param  string $type 活动类型
     * @return Activity
     */
    public function getActivityConfig($type);

    public function trigger($activityId, $name, $data = array());

    public function getActivityTypes();
}